(let [host (-> (gen-host))
      claims (gen/generate (s/gen :atlassian/claim))
      claimed-username (get-in claims [:context :user :username])
      response-user-key (gen/generate (s/gen string?))]

  (with-fake-routes
    {(str dummy-base-url "/rest/api/user?username=" claimed-username)
     (fn [_] {:status 200 :body (generate-string {:userKey response-user-key})})}

    (let [user-key (sut/get-user-key claims host)]
      (assertions
        user-key => response-user-key))))
