const baseUrl = 'https://jsonplaceholder.typicode.com/posts?_page=7';

class PostsService {
    static getNumberOfPosts() {
        return fetch(baseUrl)
                .then(response => response.json())
                .then(data => data.length)
    };
}

export default PostsService;

