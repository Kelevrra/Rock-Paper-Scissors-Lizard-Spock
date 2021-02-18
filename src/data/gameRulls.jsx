function gameRulls (user, bot) {
  if(user === bot) return 'nobody'
  if(user === 'rock' && (bot === 'lizard' || bot === 'scissors')) return 'win'
  if(user === 'paper' && (bot === 'rock' || bot === 'spock')) return 'win'
  if(user === 'scissors' && (bot === 'paper' || bot === 'lizard')) return 'win'
  if(user === 'lizard' && (bot === 'paper' || bot === 'spock')) return 'win'
  if(user === 'spock' && (bot === 'rock' || bot === 'scissors')) return 'win'
  else return 'lose'
}

export default gameRulls
