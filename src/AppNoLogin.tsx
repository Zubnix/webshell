import { CssBaseline } from '@material-ui/core'
import { CompositorSession } from 'greenfield-compositor'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { WebShellPage } from './pages/WebShellPage'
import { SupabaseContextProvider } from './SupaBaseContext'
import { RemoteApps } from './types/webshell'

const Pages = ({ compositorSession, remoteApps }: { compositorSession: CompositorSession; remoteApps: RemoteApps }) => {
  return (
    <Switch>
      <Route path='/'>
        <WebShellPage compositorSession={compositorSession} remoteApps={remoteApps} />
      </Route>
    </Switch>
  )
}

export const AppNoLogin = ({
  compositorSession,
  remoteApps,
}: {
  compositorSession: CompositorSession
  remoteApps: RemoteApps
}) => {
  return (
    <React.StrictMode>
      <SupabaseContextProvider>
        <CssBaseline>
          <BrowserRouter>
            <Pages compositorSession={compositorSession} remoteApps={remoteApps} />
          </BrowserRouter>
        </CssBaseline>
      </SupabaseContextProvider>
    </React.StrictMode>
  )
}