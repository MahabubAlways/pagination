import { useEffect, useState } from 'react'
import paginate from './utils'

export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  
  useEffect(() => {

      setLoading(true);

      fetch('https://randomuser.me/api/?results=100')
      .then(response => response.json())
      .then(data => data.results.map(user => (
          {
              name: `${user.name.first} ${user.name.last}`,
              username: `${user.login.username}`,
              email: `${user.email}`,
              phone: `${user.phone}`,
              location: `${user.location.state}, ${user.location.city}`,
              picture: `${user.picture.medium}`
          }
      )))
      .then(data => {
          setData(paginate(data));
          setLoading(false);
      })
      .catch(error => {
          console.log(error);
          setLoading(false);
      });

  }, []);

  return { loading, data }
}
