import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(hidden-folder)/layouts/visibleLayout/bar',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(hidden-folder)/visibleLayout/bar"!</div>
}
