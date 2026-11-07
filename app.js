// تمييز الباقة المختارة بصرياً (يدعم خيارات سلة radio)
document.addEventListener('change', function (e) {
  var input = e.target;
  if (!input || input.type !== 'radio') return;
  var scope = input.closest('.packages');
  if (!scope) return;
  scope.querySelectorAll('.s-form-option-item').forEach(function (el) {
    el.classList.remove('is-selected');
  });
  var item = input.closest('.s-form-option-item');
  if (item) item.classList.add('is-selected');
});
