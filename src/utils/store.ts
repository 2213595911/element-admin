class Store {
  public set(name: string, data: any) {
    localStorage.setItem(name, data)
  }
  public get(name: string) {
    return localStorage.getItem(name)
  }
  public remove(name: string) {
    localStorage.removeItem(name)
  }
}

export default new Store()
