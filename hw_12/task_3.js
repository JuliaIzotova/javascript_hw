const userUrl =  `https://jsonplaceholder.typicode.com/users`;
const albumUrl = `https://jsonplaceholder.typicode.com/albums`;
const photoUrl = `https://jsonplaceholder.typicode.com/photos`

async function getUserInfo(userId) {
    try {
        const responses =  await Promise.all([fetch(userUrl),fetch(albumUrl),fetch(photoUrl)]);
        const [users, albums, photos] = await Promise.all(responses.map(response => {
            if (!response.ok) throw new Error(`${response.status}`);
            return response.json();
        }));
        const user = users.find(user => user.id === userId);
        if (!user) throw new Error(`${userId} user not found`);

        // Формируем объект с информацией о пользователе
        const result = {
            id: userId,
            name: user.name,
            email: user.email,
            phone: user.phone,
            company: user.company.name,
            albums: []
        };
        const userAlbums = albums.filter(album => album.userId === userId);
        userAlbums.forEach(album => {
            const photoCount = photos.filter(photo => photo.albumId === album.id).length;
            result.albums.push(`${album.title} (${photoCount} photos)`);
        });
        return result;
    }catch (err) {
        console.error(err);
    }
}
async function displayUserInfo (userId) {
    const result = await getUserInfo(userId);
    if (result) {
        console.log(`ID ${result.id}  name: ${result.name}`);
        console.log(`email: ${result.email}`);
        console.log(`phone: ${result.phone}`);
        console.log(`company: ${result.company}`);
        console.log(`albums:`);
        result.albums.forEach(album => console.log(`  ${album}`));
        console.log('__________________________________'); 
    }
}

displayUserInfo(6);
displayUserInfo(3);
displayUserInfo(10);