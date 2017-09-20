export const signUp = (user) => {
  return dispatch => {
    dispatch({type: 'SIGNING_IN'});
    return fetch("/api/v1/users", {
      method: 'post',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify({user})
    }).then(res => res.json())
      .then(user => dispatch({type: 'SIGNED_IN', user: user}));
  }
}
