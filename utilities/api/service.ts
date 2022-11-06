import { fetch } from '@remix-run/node'

import dayjs from 'dayjs'

import { GameStatus } from './types'

import type { gamesDTO } from './dtos'

const currentDate = new Date()
const year = currentDate.getFullYear()
const defaultStartDate = currentDate.toISOString().split('T')[0]

currentDate.setDate(currentDate.getDate() + 7)
const defaultEndDate = currentDate.toISOString().split('T')[0]

const validateGameStatus = (game: gamesDTO) =>
  (<any>Object).values(GameStatus).includes(game.status)

/* 
NOTES:

This method grabs the data neccessary to fetch the last 10 or so games.
The method returns an async Promise that can either "resolves" (no errors & has data) or "rejects" (errors & does not have data).

PSEUDO - I "metaRequest" promise(toResolve, orToReject) => { ...when code } is done.

Keep the above PSEUDO in mind for the rest of the methods below.
*/

// export const metaRequest = async (season = new Date().getFullYear()) => {
//   let responseData = { season }

//   await fetch(
//     `https://www.balldontlie.io/api/v1/games?seasons[]=${season}&per_page=10`
//   )

//   return new Promise((resolve, reject) => {
//     https
//       .get(
//         `https://www.balldontlie.io/api/v1/games?seasons[]=${season}&per_page=10`,
//         (res) => {
//           console.log(`status: ${res.statusCode}`)

//           res.on('data', (chunk) => {
//             chunkData.push(chunk)
//           })

//           res.on('end', () => {
//             console.log(`finish grabbing game meta data.`)

//             const parseChunk = JSON.parse(Buffer.concat(chunkData).toString())

//             responseData.last_page = parseChunk?.meta?.total_pages
//             responseData.statusCode =
//               parseChunk?.data.length > 0 ? res.statusCode : 404
//             responseData.message =
//               res.statusCode === 200 && parseChunk.data.length !== 0
//                 ? 'OK'
//                 : failureMessage

//             resolve(responseData)
//           })
//         }
//       )
//       .on('error', (error) => {
//         console.error(error)
//         responseData.statusCode = 500
//         responseData.message = 'INTERNAL ERROR: See logs for details.'

//         reject(responseData)
//       })
//   })
// }

export const mapGamesData = (gamesData: any): gamesDTO[] => {
  const mappedGamesData = gamesData.map(
    ({ home_team, visitor_team, ...game }: any) => ({
      home_team: {
        id: home_team.id,
        fullName: home_team.full_name,
        score: game.home_team_score,
        stats: null,
      },
      visitor_team: {
        id: visitor_team.id,
        fullName: visitor_team.full_name,
        score: game.visitor_team_score,
        stats: null,
      },
      id: game.id,
      status: game.status as GameStatus | string,
      date: new Date(game.date).toDateString(),
    })
  )

  return mappedGamesData
  // NOTE: Sort games by game.status / start time *BELOW DOESN'T WORK*
  // return mappedGamesData.sort((gameOne, gameTwo) => {
  //   const gameOneStartStatus = validateGameStatus(gameOne)
  //   const gameTwoStartStatus = validateGameStatus(gameTwo)

  //   if (gameOneStartStatus && !gameTwoStartStatus) return 1
  //   if (!gameOneStartStatus && gameTwoStartStatus) return -1
  //   if (!gameOneStartStatus && !gameTwoStartStatus) {
  //     const gameOneTime = dayjs
  //       .utc(`${gameOne.date} ${gameOne.status}`)
  //       .valueOf()
  //     const gameTwoTime = dayjs
  //       .utc(`${gameTwo.date} ${gameTwo.status}`)
  //       .valueOf()

  //     if (gameOneTime > gameTwoTime) {
  //       return 1
  //     }

  //     return -1
  //   }
  // })
}

export const getGames = async (
  season = year,
  startDate: string = defaultStartDate,
  endDate: string = defaultEndDate
) => {
  try {
    const gamesResponse = await fetch(
      `https://www.balldontlie.io/api/v1/games?seasons[]=${season}&start_date=${startDate}&end_date=${endDate}&per_page=100`
    )

    const gamesResponseData = await gamesResponse.json()

    // Retry recursively w/ different year
    if (gamesResponse.status === 200 && gamesResponseData.data.length === 0) {
      getGames(season - 1, startDate, endDate)
    }

    return {
      data: mapGamesData(gamesResponseData.data),
      meta: { ...gamesResponseData.meta, season },
    }
  } catch (err) {
    console.error(err)
  }
}
