import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setAge, toggleAdminPage } from './uiSlice';

function FloatingSettings() {
  const age = useAppSelector((state) => state.ui.age);
  const dispatch = useAppDispatch();

  if (!age) {
    return null;
  }

  return (
    <div className="floating-settings">
      <button
        type="button"
        aria-label="Manage products"
        title="Manage products"
        className="floating-settings-button"
        onClick={() => {
          dispatch(toggleAdminPage());
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="floating-settings-icon">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
          />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Change age"
        title="Change age"
        className="floating-settings-button"
        onClick={() => {
          dispatch(setAge(null));
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="floating-settings-icon">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.867 19.125h.008v.008h-.008v-.008z"
          />
        </svg>
      </button>
    </div>
  );
}

export default FloatingSettings;
