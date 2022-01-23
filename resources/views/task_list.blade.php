<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Task List') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    {{-- tailwindのサンプルここから --}}
                    <!-- component -->
                    <!-- This is a simple todo app design using tailwind css -->
                    <div class="bg-white-600 rounded shadow p-6 m-4 w-full ">
                        <div class="mb-4 w-full">
                            <div class="flex mt-4">
                                <input
                                    class="border border-gray-800 focus:border-blue-500 rounded w-full py-2 px-3 mr-4 text-black"
                                    placeholder="Add Todo" v-model="msg" />
                                <!-- Add button -->
                                <button
                                    class="p-0 w-12 h-10 bg-gray-500 rounded-full hover:bg-gray-400 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                                    <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20"
                                        class="w-6 h-6 inline-block">
                                        <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                C15.952,9,16,9.447,16,10z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <!-- delete button -->
                        <div>
                            <x-task_item />
                        </div>
                        <!-- Completed -->
                    </div>
                    <!-- End of file -->
                    {{-- tailwindのサンプルここまで --}}
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
