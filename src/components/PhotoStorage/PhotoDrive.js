
function PhotoStorage() {
    const [searchTerm,setSearchTerm] = useState('');
    const [photos,setPhotos] = useState('');
    function handleSearch (e) {
        setSearchTerm(e.target.value);
    }
    
    return (<div>
        <div>
        
        </div>
        <PhotoStorage handleSearch={handleSearch} searchTerm={searchTerm} photos={photos} />
    </div>)
}

export default PhotoStorage;