
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const deleting = window.confirm("Are you sure you want to delete your workout? There no way to recover if you decide to proceed!")
      if (deleting){
        const response = await fetch(`/api/exercise/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
      }
      
    }
  };
  
  document
    .querySelector('.exercise-list')
    .addEventListener('click', delButtonHandler);