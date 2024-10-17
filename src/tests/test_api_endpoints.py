import requests

# Base URL for the API
BASE_URL = "http://localhost:3000"

def test_create_album():
    """
    Test the creation of a new album.
    Sends a POST request to the /albums endpoint with a new album's data.
    Asserts that the response status code is 201 (Created) and the title in the response matches the new album's title.
    """
    new_album = {
        "title": "New Album",
        "artist": "New Artist",
        "year": 2023
    }
    response = requests.post(f"{BASE_URL}/albums", json=new_album)
    assert response.status_code == 201
    assert response.json().get("title") == new_album["title"]

def test_update_album():
    """
    Test the update of an existing album.
    Sends a PUT request to the /albums/{album_id} endpoint with updated album data.
    Asserts that the response status code is 200 (OK) and the title in the response matches the updated album's title.
    """
    album_id = 1  # ID of the album to update
    updated_album = {
        "title": "Updated Album",
        "artist": "Updated Artist",
        "year": 2023
    }
    response = requests.put(f"{BASE_URL}/albums/{album_id}", json=updated_album)
    assert response.status_code == 200
    assert response.json().get("title") == updated_album["title"]

def test_delete_album():
    """
    Test the deletion of an existing album.
    Sends a DELETE request to the /albums/{album_id} endpoint.
    Asserts that the response status code is 204 (No Content).
    """
    album_id = 1  # ID of the album to delete
    response = requests.delete(f"{BASE_URL}/albums/{album_id}")
    assert response.status_code == 204

def test_get_albums():
    """
    Test retrieving the list of albums.
    Sends a GET request to the /albums endpoint.
    """
    response = requests.get(f"{BASE_URL}/albums")
    # Additional assertions can be added here to validate the response