import { USERS } from './users'

export const POSTS = [
    {
        imageurl: require('../assets/users1.png'),
        user: USERS[0].user,
        likes: 7870,
        caption: '나는 개쎈 강아지. 그 누구도 나를 막을 순 없으셈. 뒤지기 싫으면 좋아요 누르고 가라.',
        profile_picture:USERS[0].image,
        comments :[
            {
                user: 'Karina',
                comment: '홀리쒯! ㅋㅋㅋ'
            },
            {
                user: 'Winter',
                comment: 'I Love it!',
            },
        ]
    },
    {
        imageurl: require('../assets/users2.png'),
        user: USERS[1].user,
        likes: 7870,
        caption: 'Train Ride to Hogwarts.',
        profile_picture:USERS[1].image,
        comments :[
            {
                user: 'Karina',
                comment: 'ㅋㅋㅋ'
            },
            {
                user: 'Winter',
                comment: 'I Love it!',
            },
        ]
    }
]