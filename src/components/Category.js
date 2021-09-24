import Academic from './image/academic_books.jpg'
import Biography from './image/biography.jpg'
import Inspirational from './image/inspirational_books.jpg'
import Language from './image/language_books.jpg' 
import Horror from './image/horror.jpg'


import Biology from './image/categories/academic/biology.jpg'
import Chemistry from './image/categories/academic/chemistry.jpg'
import Economics from './image/categories/academic/economics.jpg'
import History from './image/categories/academic/history.jpg'
import Physics from './image/categories/academic/physics.jpg'

import ElonMusk from './image/categories/biography/elonMusk.jpg'
import MukeshAmbani from './image/categories/biography/mukeshAmbani.jpg'
import NikolaTesla from './image/categories/biography/nikolaTesla.jpg'
import RatanTata from './image/categories/biography/ratanTata.jpg'
import SteveJobs from './image/categories/biography/steveJobs.jpg'

import Asylum from './image/categories/horror/asylum.jpg'
import Dracula from './image/categories/horror/dracula.jpg'
import GhostOfTheSilentHills from './image/categories/horror/ghostOfTheSilentHills.jpg'
import TheNightFourFriends from './image/categories/horror/thatNightFourFriends.jpg'
import TwelveParanormal from './image/categories/horror/twelveParanormal.jpg'

import AtomicHabits from './image/categories/inspirational/atomicHabits.jpg'
import EverydayHero from './image/categories/inspirational/everydayHero.jpg'
import PshycologyOfMoney from './image/categories/inspirational/pshycologyOfMoney.jpg'
import RichDadPoorDad from './image/categories/inspirational/richDadPoorDad.jpg'
import The10XRule from './image/categories/inspirational/the10XRule.jpg'

import Chinese from './image/categories/language/chinese.jpg'
import French from './image/categories/language/french.jpg'
import German from './image/categories/language/german.jpg'
import Japanese from './image/categories/language/japanese.jpg'
import Korean from './image/categories/language/korean.jpg'
 



export const data =[ 
    // {   
        // identity:1,
        // name:"Academic",
        // image:require ("./image/academic_books.jpg"),
        // {products:[
            {
                id: 1,
                name:"Chemistry",
                author:"M.S.Chouhan",
                count:0, desc:"Elementary problem in Organic Chemistry for NEET/ AIIMS” has been written to clarify the concepts of Organic Chemistry for NEET/AIIMS aspirants through problems.",
                releaseYear:"2015",
                price:499,
                image: Chemistry,
                pay:0
            },
            {
                id: 2,
                name:"Physics",
                author:"H.C.Verma",
                count:0, 
                desc:"H C Verma s Concepts Of Physics is an all-inclusive book, which serves to detail out the ABC of physics in an intricate manner making it an ideal book for not only the higher secondary students, but also for those who are preparing for their competitive examinations",
                releaseYear:"2017",
                price: 401,
                image: Physics,
                pay:0
            },
            {
                id: 3,
                name:"IIMA-Day to Day Economics",
                author:"Satish Y Deodhar",
                count:0, 
                desc:"Economics and its applications are everywhere around us; however it is not easy for a layman to understand the complex theories and concepts of this subject",
                releaseYear:"2016",
                price: 222,
                image: Economics,
                pay:0
            },
            {
                id: 4,
                name:"Trueman's Elementary Biology",
                author:"M.P Tyagi & K.N. Bhatia",
                count:0, 
                desc:"Reading books is a kind of enjoyment. Reading books is a good habit. We bring you a different kinds of books. You can carry this book where ever you want.",
                releaseYear:"2021",
                price:759,
                image: Biology,
                pay:0
            },
            {
                id: 5,
                name:"Modern European History",
                author:"Joshi",
                count:0, 
                desc:"Revisiting Modern European History complements the first edited volume Themes in Modern European History: Social Movements and Cultural Currents 1789-1945",
                releaseYear:"2016",
                price:370,
                image: History,
                pay:0
            },
          
        // ]},
    // },

    // {
    //     identity:2,
    //     name:"Biography",
    //     image:require ("./image/biography.jpg"),
        // {products:[
            {
                id: 6,
                name:"Steve Jobs: The Exclusive Biography",
                author:"Walter Isaacson",
                count:0, 
                desc:"This is a riveting book, with as much to say about the transformation of modern life in the information age as about its supernaturally gifted and driven subject' - ",
                releaseYear:"2015",
                price:450,
                image: SteveJobs,
                pay:0
            },
            {
                id: 7,
                name:"A Complete Biography of Ratan Tata ",
                author:" A.K. Gandhi",
                count:0, 
                desc:"Ratan Naval Tata (born 28 December 1937) is an Indian industrialist, philanthropist, and a former chairman of Tata Sons. He was also chairman of Tata Group, from 1990 to 2012, and again, as interim chairman, from October 2016 through February 2017, and continues to head its charitable trusts.",
                releaseYear:"2021",
                price:250,
                image: RatanTata,
                pay:0
            },
            {
                id: 8,
                name:"A Complete Biography of Elon Musk ",
                author: "Abhishek Kumar",
                count:0, 
                desc:"As CEO of SpaceX and Tesla, founder of The Boring Company, and cofounder of OpenAI and Neuralink, Musk seems to be everywhere all at once, pushing all kinds of futuristic technologies.",
                releaseYear:"2021",
                price:250,
                image: ElonMusk,
                pay:0
            },
            {
                id: 9,
                name:"My Inventions, Autobiography of Nikola Tesla ",
                author:"Nikola Tesla",
                count:0, 
                desc:"One of the world’s most famous inventors and greatest minds, Nikola Tesla findings are the foundation of much of our modern-day technology and are indispensable to our understanding of electricity.",
                releaseYear:"2021",
                price:150,
                image: NikolaTesla,
                pay:0
            },
            {
                id: 10,
                name:"A Complete Biography of Mukesh Ambani",
                author:"A.K. Gandhi",
                count:0, 
                desc:"Mukesh Dhirubhai Ambani (born 19 April 1957) is an Indian billionaire businessman, and the chairman, managing director, and largest shareholder of Reliance Industries Ltd. (RIL), ",
                releaseYear:"2021",
                price:250,
                image: MukeshAmbani,
                pay:0
            },
            
        // ]},
    // },

    // {
        // identity:3,
        // name:"Horror",
        // image:require ("./image/horror.jpg"),
        // {products3:[
            {
                id: 11,
                name:"That Night: Four Friends. Twenty Years. One Haunting Secret.",
                author:"Nidhi Upadhyay",
                count:0, 
                desc:"Natasha, Riya, Anjali and Katherine were best friends in college - each different from the other yet inseparable - until that night",
                releaseYear:"2021",
                price:185,
                image: TheNightFourFriends,
                pay:0
            },
            {
                id: 12,
                name:"Ghosts of The Silent Hills",
                author:"Anita Krishan",
                count:0, 
                desc:"The dead do not rest till they get what they want. You have arrived in the hills. In here, you are surrounded by dense, menacing forests, enveloped in a deadly silence... You never know what lurks here in the Cold, dark night.",
                releaseYear:"2019",
                price:177,
                image: GhostOfTheSilentHills,
                pay:0
            },
            {
                id: 13,
                name:"Dracula",
                author:"Bram Stoker",
                count:0, 
                desc:"'I could feel the soft, shivering touch of the lips on the super-sensitive skin of my throat and the hard dents of two sharp teeth, just touching and pausing there",
                releaseYear:"2013",
                price: 119,
                image: Dracula,
                pay:0
            },
            {
                id: 14,
                name:"Asylum: 1",
                author:"Madeleine Roux ",
                count:0, 
                desc:"Madeleine Roux's New York Times bestselling Asylum is a thrilling and creepy photo-illustrated novel that Publishers Weekly called a strong YA debut that reveals the enduring impact of buried trauma on a place.",
                releaseYear:"2014",
                price:396,
                image: Asylum,
                pay:0
            },
            {
                id: 15,
                name:"TWELVE PARANORMAL TALES: Finding the light in dark times…",
                author:"AMITAV GANGULY",
                count:0,
                desc:"This anthology of paranormal short stories with diverse backgrounds in supernatural settings and unusual endings, guarantees to send chills down your spine.",
                releaseYear:"2018",
                price: 149,
                image: TwelveParanormal,
                pay:0
            },
        // ]},
    // },

    // {
    //     identity:4,
    //     name:"Inspirational",
    //     image:require ("./image/inspirational_books.jpg"),
      
    //    { products:[
            {
                id: 16,
                name:"The Everyday Hero Manifesto ",
                author:"Robin Sharma",
                count:0, 
                desc:"For over twenty-five years, leadership legend and personal-mastery path-blazer Robin Sharma has mentored billionaires, business titans, professional-sports superstars and entertainment royalty via a revolutionary methodology that led them to accomplish rare-air results",
                releaseYear:"2021",
                price:292,
                image: EverydayHero,
                pay:0
            },
            {
                id: 17,
                name:"Atomic Habits",
                author:"James Clear",
                count:0, 
                desc:"A supremely practical and useful book. James Clear distils the most fundamental information about habit formation, so you can accomplish more by focusing on less.",
                releaseYear:"2018",
                price: 570,
                image: AtomicHabits,
                pay:0
            },
            {
                id: 18,
                name:"The Psychology of Money ",
                author:"Morgan Housel ",
                count:0, 
                desc:"Elementary problem in Organic Chemistry for NEET/ AIIMS” has been written to clarify the concepts of Organic Chemistry for NEET/AIIMS aspirants through problems.",
                releaseYear:"2020",
                price:277,
                image: PshycologyOfMoney,
                pay:0
            },
            {
                id: 19,
                name:"Rich Dad Poor Dad",
                author:"Robert T. Kiyosaki",
                count:0, 
                desc:"It's been nearly 25 years since Robert Kiyosaki’s Rich Dad Poor Dad first made waves in the Personal Finance arena It has since become the #1 Personal Finance book of all time... ",
                releaseYear:"2017",
                price:305,
                image: RichDadPoorDad,
                pay:0
            },
            {
                id: 20,
                name:"The 10x Rule",
                author:"Grant Cardone",
                count:0, 
                desc:"Achieve Massive Action results and accomplish your business dream! While most people operate with only three degrees of action-no action, retreat, or normal action",
                releaseYear:"2011",
                price:299,
                image: The10XRule,
                pay:0
            },
          
        // ]},
    // },

    // {
    //     identity:5,
    //     name:"Language",
    //     image:require ("./image/language_books.jpg"),
        // {products:[
            {
                id: 21,
                name:"The Everything Learning German Book",
                author:"Edward Swick",
                count:0, 
                desc:"Order das beste Bier at Oktoberfest! Hitch a ride on der Autobahn! Say Wilkommen to your neuen deutschen Freunde!",
                releaseYear:"2009",
                price:499,
                image: German,
                pay:0
            },
            {
                id: 22,
                name:"Korean Language",
                author:" Satish Satyarthi Harsh Kumar Mishra",
                count:0, 
                desc:"A good book to go for if you are beginer",
                releaseYear:"2021",
                price:315,
                image: Korean,
                pay:0
            },
            {
                id: 23,
                name:"French ",
                author:"Der Sprachclub",
                count:0, 
                desc:"Conversational French Dialogues for Beginners and Intermediate Learners",
                releaseYear:"2019",
                price:1025,
                image:French,
                pay:0
            },
            {
                id: 24,
                name:"Chinese",
                author:"Michelle Tate & Lisa Wang and 6 more",
                count:0, 
                desc:"Provides a smooth transition from GCSE to AS, following the lates three unit specification.",
                releaseYear:"2008",
                price:1113,
                image:Chinese,
                pay:0
            },
            {
                id: 25,
                name:"Japanese",
                author:"M.S.Chouhan",
                count:0, 
                desc:"Having trouble following dialogues on your favorite Japanese anime, series and movies? ",
                releaseYear:"2021",
                price: 1124,
                image:Japanese,
                pay:0
            },

            {
                id:26,
                Catname:"Academic",
                img: Academic
            },
            {
                id:27,
                Catname:"Biography",
                img: Biography   
            },
            {
                id:28,
                Catname:"Horror",
                img: Horror
            },
            {
                id:29,
                Catname:"Inspirational",
                img: Inspirational
            },
            {
                id:30,
                Catname:"Language",
                img: Language
            }

            
        // ]}
    // }
    
]

export default data