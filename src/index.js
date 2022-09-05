import Post from '@modules/Post'
import './styles/style.css'
import * as $ from 'jquery'


const post = new Post ('Webpack post')
$('pre').html(post.toString())
console.log('Post to String', post.toString())