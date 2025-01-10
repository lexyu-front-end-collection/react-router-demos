import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(hidden-folder)/layouts/visibleLayout')({
  component: RouteComponent,
  notFoundComponent: NotFound,
})

function RouteComponent() {
  return (
    <div>
      <p>This layout is visible in the URL 👀</p>
      <Link to="/layouts/visibleLayout/foo">Foo</Link>{' '}
      <Link to="/layouts/visibleLayout/bar">Bar</Link>
      <hr />
      <Outlet />
    </div>
  )
}

function NotFound() {
  return <div>I'm the Not found page, inside /visibleLayout</div>
}
