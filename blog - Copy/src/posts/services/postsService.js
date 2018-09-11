const baseUrl = 'https://jsonplaceholder.typicode.com/posts?_page=7';

class PostsService {
    static getPosts() {
        return fetch(baseUrl).then(response => response.json())
    };
}

export default PostsService;

