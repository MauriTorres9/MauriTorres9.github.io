<script>
function showImage(imageSrc) {
    document.getElementById('modalImage').src = imageSrc;
    var myModal = new bootstrap.Modal(document.getElementById('imageModal'));
    myModal.show();
}
</script>
