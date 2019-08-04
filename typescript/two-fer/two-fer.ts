class TwoFer {
  static twoFer(name: string="") {
    const displayedName = name === "" ? "you" : name
    return `One for ${displayedName}, one for me.`
  }
}

export default TwoFer
