import reactCarouselStyles from 'react-multi-carousel/lib/styles.css'
import globalStyles from '~/css/global-styles.css'

import { useContext } from 'react'

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from '@remix-run/react'

import { StylesContext, theme } from '~/css-theme'

import Layout from '~/Layout'

import type { LinksFunction, MetaFunction } from '@remix-run/node'

import type { ErrorBoundaryProps } from './utilities/types'
import { ErrorContainer } from './Layout/ErrorContainer'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Ball Hog',
  viewport: 'width=device-width,initial-scale=1',
})

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
    },
    {
      rel: 'stylesheet',
      href: reactCarouselStyles,
    },
    {
      rel: 'stylesheet',
      href: globalStyles,
    },
  ]
}

function Document({
  children,
  title,
  errorStyle,
}: {
  children: React.ReactNode
  title?: string
  errorStyle?: { backgroundColor: string }
}) {
  const styleData = useContext(StylesContext)

  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content={theme.palette.primary.main} />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
        {styleData?.map(({ key, ids, css }) => (
          <style
            key={key}
            data-emotion={`${key} ${ids.join(' ')}`}
            dangerouslySetInnerHTML={{ __html: css }}
            suppressHydrationWarning
          />
        ))}
      </head>
      <body style={errorStyle}>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames

// NOTE: When I create a Layout add it here. Make Outlet the child of <Layout />
export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary

export function ErrorBoundary({ error }: ErrorBoundaryProps) {
  console.error(error)

  return (
    <Document
      title="Error!"
      errorStyle={{ backgroundColor: theme.palette.error.light }}
    >
      <Layout>
        <ErrorContainer
          fill
          title="Woaa there baller!"
          message="We gotta call timeout here something isn't right on our end!!"
        />
      </Layout>
    </Document>
  )
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  const caught = useCatch()

  const title = `${caught.status} ${caught.statusText}`

  let message
  switch (caught.status) {
    case 401:
      message =
        'Oops! Looks like you tried to visit a page that you do not have access to.'
      break
    case 404:
      message =
        'Oops! Looks like you tried to visit a page that does not exist.'
      break

    default:
      throw new Error(caught.data || caught.statusText)
  }

  // NOTE: When I create a Layout add it here. Make root <h1> the child of <Layout />
  return (
    <Document
      title={title}
      errorStyle={{ backgroundColor: theme.palette.error.light }}
    >
      <Layout>
        <ErrorContainer fill title={title} message={message} />
      </Layout>
    </Document>
  )
}
