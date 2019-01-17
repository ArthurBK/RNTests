import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/GithubRedux'

test('request', () => {
  const username = 'taco'
  const state = reducer(INITIAL_STATE, Actions.userRequest(username))

  // test state return values
})

test('success', () => {
  const avatar = 'http://placekitten.com/200/300'
  const state = reducer(INITIAL_STATE, Actions.userSuccess(avatar))

  // test state return values
})

test('failure', () => {
  const state = reducer(INITIAL_STATE, Actions.userFailure())

  // test state return values
})
