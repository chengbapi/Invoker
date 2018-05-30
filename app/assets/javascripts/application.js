// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= stub editor.jsx.erb
//= require react
//= require react_ujs
//= require components
//= require_tree .


graphql = {
    query: function(query, variables) {
        return $.ajax({

            url: '/graphql',
            method: 'POST',
            contentType:'application/json',
            data: JSON.stringify({
                query: query,
//                     `query($uid:ID!) {
// 	userRank(only_pro: true) {
// 		...commonFields
// 	}
//
//   user(id: $uid) {
// 		...commonFields
//   }
//
//   books(author_id: $uid) {
//     id
//     name
//   }
// }

// fragment commonFields on User {
//     id
//     name
//     title
// }
// `,
                variables: variables
            })
        })
    },
    mutation: function(mutation, variables) {
        return $.ajax({

            url: '/graphql',
            method: 'POST',
            contentType:'application/json',
            data: JSON.stringify({
                mutation: mutation,
                // query: 'query {' +
                // 'testField' +
                // '}',
//                     `query($uid:ID!) {
// 	userRank(only_pro: true) {
// 		...commonFields
// 	}
//
//   user(id: $uid) {
// 		...commonFields
//   }
//
//   books(author_id: $uid) {
//     id
//     name
//   }
// }

// fragment commonFields on User {
//     id
//     name
//     title
// }
// `,
                variables: variables
            })
        })
    }
}

