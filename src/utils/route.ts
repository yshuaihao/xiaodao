import path from 'path'

const getChildrenRoutes = (routes: any) => {
  const result: any = []
  routes.forEach((route: any) => {
    if (route.children && route.children.length > 0) {
      result.push(...route.children)
    }
  })
  return result
}

export const filterRouters = (routes: any) => {
  const childrenRoutes = getChildrenRoutes(routes)
  return routes.filter((route: any) => {
    return !childrenRoutes.find((childrenRoute: any) => {
      return childrenRoute.path === route.path
    })
  })
}

function isNull(data: any) {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}

export function generateMenus(routes: any, basePath = '') {
  const result: any = []
  routes.forEach((item: any) => {
    if (isNull(item.meta) && isNull(item.children)) return
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...generateMenus(item.children))
      return
    }
    const routePath = path.resolve(basePath, item.path)
    let route = result.find((item: any) => item.path === routePath)
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }

      if (route.meta.title) {
        result.push(route)
      }
    }

    if (item.children) {
      route.children.push(...generateMenus(item.children, route.path))
    }
  })
  return result
}
