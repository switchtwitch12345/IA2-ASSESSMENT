// Function to handle checking/unchecking items
function check_me(item) 
{
    console.log("Checked:", item);
}

// Function to handle deleting items
function delete_item(item) {
    console.log("Delete:", item);

    // Send a POST request to delete_items route
    fetch('/delete_items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            item_to_delete: item
        })
    })
    .then(response => {
        if (response.ok) {
            console.log('Item deleted successfully');
            // You can update the UI or perform any other action on successful deletion
        } else {
            console.error('Error deleting item');
            // Handle error if deletion fails
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle network or other errors
    });
}

// Example of using fetch to send a POST request to the server for item update
function update_item(oldItem, newItem) {
    console.log("Update:", oldItem, "->", newItem);

    // Send a POST request to update_items route
    fetch('/update_items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            old_item: oldItem,
            new_item: newItem
        })
    })
    .then(response => {
        if (response.ok) {
            console.log('Item updated successfully');
            // You can update the UI or perform any other action on successful update
        } else {
            console.error('Error updating item');
            // Handle error if update fails
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle network or other errors
    });
}