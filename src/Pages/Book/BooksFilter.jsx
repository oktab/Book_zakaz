const BooksFilter = ({
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedLanguage,
    setSelectedLanguage,
    categories,
    languages
}) => {
    return (
        <div className='w-[1230px] h-[50px] flex justify-between'>
            <input
                type="text"
                placeholder='Qidirish'
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                }}
                className='pl-[20px] text-[18px] w-[455px] h-[50px] border-[#1E3A8A33] border rounded-[10px] focus:outline-0'
            />
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className='w-[455px] h-[50px] rounded-[10px] border-[#1E3A8A33] border focus:outline-0'
            >
                {categories.map((cat, i) => (
                    <option key={i} value={cat}>{cat}</option>
                ))}
            </select>
            <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className='w-[300px] h-[50px] rounded-[10px] border-[#1E3A8A33] border focus:outline-0'
            >
                {languages.map((lang, i) => (
                    <option key={i} value={lang}>{lang}</option>
                ))}
            </select>
        </div>
    );
};

export default BooksFilter;
