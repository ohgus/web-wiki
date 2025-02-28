window.addEventListener('DOMContentLoaded', () => {
  const commentWritingForm = document.querySelector('.comment-writing-form');
  const commentList = document.querySelector('.comment-list');
  const commentInput = document.querySelector('.comment-input');
  const commentEmpty = document.querySelector('.comment-empty');
  const cancelButton = document.querySelector('.cancel-button');

  if (commentList.children.length > 1) {
    commentEmpty.classList.add('hidden');
  }

  commentWritingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const comment = commentInput.value.trim();
    if (!comment) return;

    if (!commentEmpty.classList.contains('hidden')) {
      commentEmpty.classList.add('hidden');
    }

    alert('오거스의 위키에 댓글이 등록되었습니다.');

    const commentItem = document.createElement('li');
    commentList.appendChild(commentItem);
    const newItem = `
    <div class="comment-item">
                <div class="comment-author">
                  <img
                    class="comment-author-icon"
                    src="./images/comment-author-icon.png"
                    alt="사용자 프로필 이미지"
                  />
                  <span>방문자</span>
                </div>
                <div class="comment-content">
                  ${comment}
                </div>
              </div>`;
    commentItem.innerHTML = newItem;

    commentInput.value = '';
  });

  cancelButton.addEventListener('click', () => {
    commentInput.value = '';
  });
});
