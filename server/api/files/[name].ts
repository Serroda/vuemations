export default defineEventHandler(async (event) => {
  const name = getRouterParam(event, 'name')

  if (name === undefined) {
    return ""
  }

  const storage = useStorage('assets:animations')

  if (name != "all") {
    return await storage.getItem(name)
  }

  const keys = await storage.getKeys()
  let stringResult = ""

  for (const iterator of keys) {
    stringResult += await storage.getItem(iterator);
  }

  return stringResult
})
