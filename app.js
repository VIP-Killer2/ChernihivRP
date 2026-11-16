const form = document.querySelector("#demo-form");
const message = document.querySelector("#form-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nickname = document.querySelector("#nickname").value.trim();
  const password = document.querySelector("#password").value;

  if (nickname.length < 3) {
    message.textContent = "Нік має містити щонайменше 3 символи.";
    return;
  }

  if (password.length < 6) {
    message.textContent = "Пароль має містити щонайменше 6 символів.";
    return;
  }

  message.textContent = `Дякуємо, ${nickname}! Це лише тест форми — акаунт ще не створено.`;
});
const SUPABASE_URL = "https://ztyknchaetzrbiwtjaoj.supabase.co";
const SUPABASE_KEY = "sb_publishable_vShvdUI3c-c2argPHzJmxw_8C5DH2NY";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
