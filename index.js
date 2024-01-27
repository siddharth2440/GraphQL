import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone'
import {movies,involvedPerson,stars} from './dummyMovieDataSet.js'
import {randomBytes} from 'crypto'
import { log } from 'console';
import { resourceUsage } from 'process';


const typeDefs = `
    type Movie{
        id:ID!,
        movieName:String!,
        duration:Float!,
        about:String!,
    }

    type Person{
        by:ID!,
        director:[String!],
        writers:[String!]!,
        stars:[String!]!,
        movie:Movie!
    }

    type Star{
        id:ID!,
        star:Float,
        movie:Movie!,
        person:Person!,
    }

    type SelectByMovieId{
        id:ID!,
        star:Float,
        movie:Movie!,
        person:Person!,
    }

    type Mutation{
        createMovieDummy(newMovie:movie!):Movie
    }

    input movie{
        movieName:String!,
        duration:Float!,
        about:String!,
    }

    type Query{
        movies:[Movie],
        persons:[Person],
        movie(id:ID!):Movie!,
        person(by:ID!):Person!,
        star:[Star],
        Selection(id:ID!):SelectByMovieId!
    }
`

const resolvers = {
    Query:{
        movies:()=>movies,
        persons:()=>involvedPerson,
        movie:(_,{id})=>movies.find(movie=>movie.id==id),
        person:(_,{by})=>involvedPerson.find(person=>person.by==by),
        star:()=>stars,
        Selection:(_,{id})=>stars.find(star=>star.id==id),
    },

    // personId Daal ke saree info director and movieName etc. getting by this resolvers
    Person:{
        movie:({...parent},args)=>{
            // console.log(parent);
            return movies.find(movie=>movie.id==parent.by)
        }
    },


    Star:{
        movie:({...parent},args)=>{
            return movies.find(movie=>movie.id==parent.id)
        },
        person:({...parent},args)=>{
            return involvedPerson.find(each=>each.by==parent.id)
        }
    },


    SelectByMovieId:{
        movie:(parent,args)=>{
            const {id,star} = parent;
            return movies.find(movie=>movie.id==id)
        },
        person:({id,star},args)=>involvedPerson.find(person=>person.by==id)

    },


    Mutation:{
        createMovieDummy:(_,{newMovie})=>{
            const id = randomBytes(5).toString('hex');
            movies.push({
                id,
                ...newMovie
            })

            return movies.find(movie=>movie.id==id);
        }
    }
}

const server = new ApolloServer({typeDefs,resolvers})
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);