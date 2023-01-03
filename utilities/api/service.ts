import { fetch } from '@remix-run/node'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import { GameResults, GameStatus } from './types'

import type { GamesDTO } from './dtos'

dayjs.extend(utc)

const currentDate = new Date()
const year = currentDate.getFullYear()
const defaultStartDate = currentDate.toISOString().split('T')[0]

currentDate.setDate(currentDate.getDate() + 7)
const defaultEndDate = currentDate.toISOString().split('T')[0]

const isGameLive = (game: GamesDTO) =>
  (<any>Object).values(GameStatus).includes(game.status)

const formatGameTime = (date: string, timeLocal: string) => {
  const time = timeLocal.split(' ').shift()
  const isoDate = new Date(date).toISOString().split('T').shift()

  return dayjs.utc(`${isoDate} ${time}`).format()
}
/* 
NOTES:

This method grabs the data necessary to fetch the last 10 or so games.
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

/*
---- The Problem -------
 Games that have not started are being returned out of order.

  1. What is the desired functionality that you want?
  - Games that have been played are presented 1st, then the games that are live and finally the games that are scheduled in chronological order.

  2. How are we getting the games in the 1st place
  - By sending startDate and endDate query to balldontlie API.
 
  3. Can we confirm that this returns games out of order? 
  - Yes

  4. Is there another endpoint that can be used?
  - No

  5. How can we distinguish between the 3 different game statuses. 
  - Live games are represented by "Qtr" - status, Finished games are represented by "Final" - status, Scheduled games are represented by time value.

  6. What is this time value? What type of time is it?
  - Date is in ISO, but time (status) is in h:mm A
*/

export const mapGamesData = (gamesData: any): GamesDTO[] => {
  const mappedGamesData: GamesDTO[] = gamesData.map(
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
      date: dayjs.utc(game.date).format('ddd MMM DD YYYY'),
    })
  )

  return mappedGamesData.sort((gameOne, gameTwo) => {
    const gameOneLive = isGameLive(gameOne)
    const gameTwoLive = isGameLive(gameTwo)

    const gameOneTime = formatGameTime(
      gameOne.date,
      gameOneLive ? '' : gameOne.status
    )
    const gameTwoTime = formatGameTime(
      gameTwo.date,
      gameTwoLive ? '' : gameTwo.status
    )

    if (gameOneTime > gameTwoTime) {
      return 1
    }

    if (gameOneTime < gameTwoTime) {
      return -1
    }

    return 0
  })
}

export const getGames = async (
  season = year,
  startDate: string = defaultStartDate,
  endDate: string = defaultEndDate
): Promise<GameResults | undefined> => {
  try {
    const gamesResponse = await fetch(
      `https://www.balldontlie.io/api/v1/games?seasons[]=${season}&start_date=${startDate}&end_date=${endDate}&per_page=100`
    )

    const gamesResponseData = await gamesResponse.json()

    // Retry recursively w/ different year
    if (gamesResponse.status === 200 && gamesResponseData.data.length === 0) {
      return getGames(season - 1, startDate, endDate)
    }

    return {
      data: mapGamesData(gamesResponseData.data),
      meta: { ...gamesResponseData.meta, season },
    }
  } catch (err) {
    console.error(err)
  }
}
