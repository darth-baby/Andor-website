const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGU5NTVjYTdhMWJiYWI5NGRkNzMxNjAyZWNiNjYxYSIsIm5iZiI6MTc1NTQ1NjgzMS45ODg5OTk4LCJzdWIiOiI2OGEyMjUzZmQ5N2M2NWE0NjA2MWM4MzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.BCnZou3MXsbf3vFx7AV_p9u0T3yqN45dXsT449rgz7I'
  }
};

fetch('https://api.themoviedb.org/3/tv/83867-andor?language=en-US', options)
  .then(res => res.json())
  .then(res => {
    console.log(res);
    const tagline = res.tagline;

    const taglineElement = document.querySelector('#series-tagline');
    if (taglineElement) {
      taglineElement.textContent = tagline;
    }

  })

  .catch(err => console.error(err));