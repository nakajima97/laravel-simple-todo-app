<div class="flex mb-4 items-center" data-id="{{ $message }}">
    <button
        class="
    js-btn-finish uppercase p-2 flex items-center bg-red-500 hover:bg-red-400 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full w-10 h-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
    </button>
    <p class="w-full">
        {{ $slot }}
    </p>
    <button
        class="uppercase p-3 flex items-center bg-gray-500 hover:bg-gray-400 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full w-10 h-10">
        <svg width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"
            style="transform: rotate(360deg);">
            <path d="M12 12h2v12h-2z" fill="currentColor"></path>
            <path d="M18 12h2v12h-2z" fill="currentColor"></path>
            <path d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z" fill="currentColor"></path>
            <path d="M12 2h8v2h-8z" fill="currentColor"></path>
        </svg>
    </button>
</div>
