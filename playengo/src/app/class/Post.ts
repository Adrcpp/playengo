import { User } from './User'

export interface Post {
    id: "9Usgp6nD6YI",
    created: string,
    mediaId: string,
    user: User
    likes: number,
    title: string,
    description: string
}

// Example
//
// "id": "9Usgp6nD6YI",
// "created": "2019-07-02T17:14:27-04:00",
// "mediaId": "OThlNTVlYTNjZDNlMTYwYWZhYjE4MTBmYmRhNGUyZmJiNjM4OWM4ODowM2E2NGQyN2Y5NTg1ZmMzOnQ1dVBkZnE0bzV2dGFLL25ZQlZEWFE9PQ==",
// "user": {
//   "id": "gmdYCu_puTw",
//   "username": "hubblecontacts"
// },
// "likes": 129,
// "title": null,
// "description": null