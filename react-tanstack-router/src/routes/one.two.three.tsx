import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/one/two/three')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/one/two/three"!</div>
}
