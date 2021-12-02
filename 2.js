const part_one = (lst) => {
  let state = {p: 0, d: 0}

  const reducer = (state, action) => {
    const {p, d} = state
    const {type, value} = action
    switch (type) {
      case 'forward': return {...state, p: p + value}
      case 'down': return {...state, d: d + value}
      case 'up': return {...state, d: d - value}
    }
  }

  const parser = (lst) => {
    lst.split('\n').forEach(l => {
      const [type, value] = l.split(' ')
      const s = reducer(state, {type, value: Number(value)})
      state = s
    })
  }

  const solver = (lst) => {
    parser(lst)
    return state.p * state.d
  }
}

const part_two = (lst) => {
  let state = {position: 0, depth: 0, aim: 0}

  const reducer = (state, action) => {
    const {position, depth, aim} = state
    const {type, value}  = action
    switch (type) {
      case 'forward':
        return {
          ...state,
          position: position + value,
          depth: aim === 0 ? depth : aim * value + depth
        }
      case 'down':
        return {
          ...state,
          aim: aim + value
        }
      case 'up':
        return {
          ...state,
          aim: aim - value
        }
    }
  }

  const parser = (lst) => {
    lst.split('\n').forEach(l => {
      const [type, value] = l.split(' ')
      const s = reducer(state, {type, value: Number(value)})
      state = s
    })
  }

  const solver = (lst) => {
    parser(lst);
    return state.position * state.depth
  }
}
