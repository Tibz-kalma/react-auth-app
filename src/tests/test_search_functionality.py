import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Step 1: Set up the WebDriver and open the browser
driver = webdriver.Chrome()  # or webdriver.Firefox() if using Firefox
driver.maximize_window()

try:
    # Step 2: Navigate to the photo/album listing page
    driver.get("http://localhost:3000/album")  # Replace with the actual URL

    # Step 3: Locate the search box element
    search_box = driver.find_element(By.CLASS_NAME, "search-box")

    # Step 4: Enter a search term into the search box
    search_term = "ducimus"
    search_box.send_keys(search_term)

    # Step 5: Submit the search form
    search_box.send_keys(Keys.RETURN)

    # Step 6: Validate that the correct results appear
    # Wait until the results are loaded
    wait = WebDriverWait(driver, 20)
    results = wait.until(EC.presence_of_all_elements_located((By.CLASS_NAME, "result-item")))  # Adjust the locator as needed

    # Check if the results contain the search term
    assert any(search_term.lower() in result.text.lower() for result in results), "Search term not found in results"

    print("Test passed: Search functionality works correctly.")

    # Add a delay to allow manual verification
    time.sleep(10)  # Adjust the delay as needed

finally:
    # Step 7: Close the browser
    driver.quit()