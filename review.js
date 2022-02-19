let movies = [];

// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addMovie = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    
    let input = document.getElementById('title').value;

    const date = new Date();
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var day = days[ date.getDay() ];
    var month = months[ date.getMonth() ];

    if (input.length == 0){
        console.log('err');
    } 
    else {

        let movie = {
            id: ""+month+" "+date.getDate()+", "+date.getFullYear(),
            title: document.getElementById('title').value,
        }

        movies.push(movie);
        document.forms[0].reset(); // to clear the form for the next entries
        //document.querySelector('form').reset();

        //for display purposes only
        console.warn('added' , {movies} );
        let pre = document.querySelector('#msg pre');
        // pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

        // New Code:
        let m = JSON.stringify(movies[movies.length-1].title);
        // m.replace(/['"]+/g, '');
        let d = JSON.stringify(movies[movies.length-1].id);
        // pre.textContent = m+", "+d+"\n";
        createPosts(m,d);
        // End


        //saving to localStorage
        localStorage.setItem('MyMovieList', JSON.stringify(movies) );
    // localStorage.setItem('MyMovieList', JSON.stringify(movies).title );
    }
    
}
    document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById('btn').addEventListener('click', addMovie);
    
});


function createPosts(m, d){
    const name = window.localStorage.getItem('user');

    // Craete post
    const post = document.createElement('div');
    post.setAttribute('class', 'post');
    post.innerHTML = "<p> "+name+" says: "+m+", "+d+"</p>";
    post.style.width = '100px';
    post.style.height = '100px';
    post.style.background = 'blue';

    // Append post
    const posts = document.getElementById('posts');
    posts.prepend(post);
}
