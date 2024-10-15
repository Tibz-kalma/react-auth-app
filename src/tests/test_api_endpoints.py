import requests

BASE_URL = "http://localhost:3000/api"  

def test_get_albums():
    response = requests.get(f"{BASE_URL}/albums")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_get_album_by_id():
    album_id = 1  # Replace with a valid album ID
    response = requests.get(f"{BASE_URL}/albums/{album_id}")
    assert response.status_code == 200
    assert response.json().get("id") == album_id

def test_create_album():
    new_album = {
        "title": "New Album",
        "artist": "New Artist",
        "year": 2023
    }
    response = requests.post(f"{BASE_URL}/albums", json=new_album)
    assert response.status_code == 201
    assert response.json().get("title") == new_album["title"]

def test_update_album():
    album_id = 1  # Replace with a valid album ID
    updated_album = {
        "title": "Updated Album",
        "artist": "Updated Artist",
        "year": 2023
    }
    response = requests.put(f"{BASE_URL}/albums/{album_id}", json=updated_album)
    assert response.status_code == 200
    assert response.json().get("title") == updated_album["title"]

def test_delete_album():
    album_id = 1  # Replace with a valid album ID
    response = requests.delete(f"{BASE_URL}/albums/{album_id}")
    assert response.status_code == 204