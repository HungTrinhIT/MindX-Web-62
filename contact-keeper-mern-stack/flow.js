/*
    Authentication flow  (accessToken)
    
    1. Login
        - Frontend: LoginForm => dispatch action (username, password)
                              => Call API login => (1,1) Success: accessToken  (DONE)
                                                => (1,2) Fail: reject => handle error UI (DONE)
                    
                            1,1: Login success: accessToken
                            => Navigate Homepage
                            => PrivateRoute component wrap Homepage, ContactPage, Profile settings
                            => Authentication Context: share props => component
                            => Reload: save session authentication => save accessToken localStorage (sessionStorage)


    2. Register (Signup)
        ....

    
    3. Logout
        ....


*/
