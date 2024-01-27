const movies = [
    {
        id:101,
        movieName:'Salaar: CeaseFire - Part 1',
        duration:2.55,
        about:'The fate of a violently contested kingdom hangs on the fraught bond between two friends-turned-foes in this saga of power, bloodshed and betrayal.'
    },
    {
        id:102,
        movieName:'Jawan',
        duration:2.49,
        about:"A high-octane action thriller which outlines the emotional journey of a man who is set to rectify the wrongs in the society."
    },
    {
        id:103,
        movieName:'Pathaan',
        duration:2.26,
        about:'An Indian agent races against a doomsday clock as a ruthless mercenary, with a bitter vendetta, mounts an apocalyptic attack against the country.'
    }
]


const involvedPerson = [
    {
        by:101,
        director:['Prashanth Neel'],
        writers:['Sandeep Reddy Bandla','Choudhary Hanuman','Prashanth Neel'],
        stars:['Prabhas','Prithviraj Sukumaran','Shruti Hassan']
    },
    {
        by:102,
        director:['Atlee'],
        writers:['Sumit Arora','Atlee','Ramanagirivasan'],
        stars:['Shahrukh Khan','Nayanthra','Vijay Sethupathi']
    },
    {
        by:103,
        director:['Siddharth Anand'],
        writers:['Shridhar Raghavan','Abbas Tyrewala','Siddharth Anand'],
        stars:['Sharukh Khan','Deepika Padukon','John Abraham']
    }
]


const stars =[
    {
        id:101,
        star:6.6
    },
    {
        id:102,
        star:7.0
    },
    {
        id:103,
        star:5.9
    }
]

export {
    movies,
    involvedPerson,
    stars
}