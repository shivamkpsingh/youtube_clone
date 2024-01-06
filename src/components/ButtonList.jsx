import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ButtonList = () => {

  const [buttonList, setButtonList] = useState([])

  let random_array = [
    "Narendra Modi",
"Indira Gandhi",
"Jawaharlal Nehru",
"Amit Shah",
"Rajiv Gandhi",
"APJ Abdul Kalam",
"Dr. B.R. Ambedkar",
"Dr. Sarvepalli Radhakrishnan",
"Swami Vivekananda",
"Dr. A.P.J. Abdul Kalam",
"Sundar Pichai",
"Satya Nadella",
"Nandan Nilekani",
"Ritesh Agarwal",
"Vijay Shekhar Sharma",
"Bhuvan Bam",
"Amit Bhadana",
"Ashish Chanchlani",
"CarryMinati (Ajey Nagar)",
"Technical Guruji (Gaurav Chaudhary)",
"Sachin Tendulkar",
"Virat Kohli",
"Kapil Dev",
"Sunil Gavaskar",
"MS Dhoni",
"Lata Mangeshkar",
"Arijit Singh",
"Asha Bhosle",
"Kishore Kumar",
"Sonu Nigam",
"Rahul Dravid",
"Ravichandran Ashwin",
"PV Sindhu",
"Viswanathan Anand",
"Milkha Singh",
"Dhyan Chand",
"Hima Das",
"Mary Kom",
"Manmohan Singh",
"Sonia Gandhi",
"Arun Jaitley",
"Mukesh Ambani",
"Azim Premji",
"N. R. Narayana Murthy",
"Amartya Sen",
"Kiran Mazumdar-Shaw",
"Ratan Tata",
"Saina Nehwal",
"Deepika Padukone",
"Priyanka Chopra",
"Aamir Khan",
"Shah Rukh Khan",
"Salman Khan",
"Mahendra Singh Dhoni",
"Rahul Gandhi",
"Yuvraj Singh",
"Rohit Sharma",
"VVS Laxman",
"Anil Kumble",
"Gautam Gambhir",
"Harbhajan Singh",
"Yuvraj Singh",
"Rishabh Pant",
"Hardik Pandya",
"Jasprit Bumrah",
"Ravindra Jadeja",
"Saina Nehwal",
"PV Sindhu",
"Sakshi Malik",
"Mary Kom",
"Pullela Gopichand",
"Bhaichung Bhutia",
"Leander Paes",
"Mahesh Bhupathi",
"Sania Mirza",
"Dipika Pallikal",
"Sharath Kamal",
"Sushil Kumar",
"Vijender Singh",
"Manika Batra",
"Abhinav Bindra",
"Yogeshwar Dutt",
"Sushil Kumar",
"Bajrang Punia",
"P. V. Sindhu",
"Mirabai Chanu",
"Lovlina Borgohain",
"Neeraj Chopra",
"Manika Batra",
"Mary Kom",
"Saina Nehwal",
"PV Sindhu",
"Hima Das",
"Deepa Malik",
"Dutee Chand",
"Milkha Singh",
"Gagan Narang",
"Manu Bhaker",
"A. P. J. Abdul Kalam",
"Raghuram Rajan",
"Abhijit Banerjee",
"Arvind Kejriwal",
"Nirmala Sitharaman",
"Smriti Irani",
"P. Chidambaram",
"Rahul Gandhi",
"Sushma Swaraj",
"Pranab Mukherjee",
"Ram Nath Kovind",
"Venkaiah Naidu",
"Atal Bihari Vajpayee",
"Nitin Gadkari",
"Sharad Pawar",
"Yogi Adityanath",
"Mamata Banerjee",
"Arvind Kejriwal",
"Mayawati",
"Akhilesh Yadav",
"Naveen Patnaik",
"Devendra Fadnavis",
"Uddhav Thackeray",
"K. Chandrashekar Rao",
"Pinarayi Vijayan",
"Chandrababu Naidu",
"B. S. Yediyurappa",
"Sarbananda Sonowal",
"Amit Shah",
"Rajnath Singh",
"Nirmala Sitharaman",
"Sushma Swaraj",
"Arun Jaitley",
"Manohar Parrikar",
"Nitin Gadkari",
"Smriti Irani",
"Prakash Javadekar",
"Harsh Vardhan",
"Suresh Prabhu",
"Ravi Shankar Prasad",
"Harsimrat Kaur Badal",
"Najma Heptulla",
"Ram Vilas Paswan",
"Sushma Swaraj",
"Maneka Gandhi",
"Anupriya Patel",
"Jyotiraditya Scindia",
"Sachin Pilot",
"Omar Abdullah",
"Harsimrat Kaur Badal",
"Rajnath Singh",
"Arun Jaitley",
"Nitin Gadkari",
"Smriti Irani",
"Ravi Shankar Prasad",
"Piyush Goyal",
"Nirmala Sitharaman",
"Amit Shah",
"Yogi Adityanath",
"Mamata Banerjee",
"Arvind Kejriwal",
"Mayawati",
"Uddhav Thackeray",
"K. Chandrashekar Rao",
  ]

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

useEffect(()=>{
  const new_array = shuffleArray(random_array);
  new_array.length = 8;
  setButtonList(new_array);
},[])



  return (
    <div className='flex'>
        <Link to="/result?search_query=" className='px-5 py-2 m-2 font-semibold text-base rounded-lg bg-gray-100'>
          All
        </Link>

        {
          buttonList?.map(button_data=>{
          return (
            <Link to={`/result?search_query=${button_data}`} className='px-3 py-2 m-2  text-sm w-100 rounded-lg bg-gray-100'>{button_data}</Link>
          )
          })
        }
    </div>
  )
}

export default ButtonList