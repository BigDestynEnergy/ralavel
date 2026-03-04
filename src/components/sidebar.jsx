const sideTabs = [
    {label: 'Reader', icon: '📚'},
    {label: 'Bookmarks', icon: '🔖'},
    {label: 'Downloads', icon: '⬇️'},
    {label: 'Creators', icon: '🪶'},
    {label: 'Communities', icon: '👥'}   
]

export const Sidebar = ()=>{
    return(
        <section className="sidebar">
            {sideTabs.map(sideTab => (
                <div className="side-card">
                    <span>{sideTab.icon}</span>
                    <span>{sideTab.label}</span>
                </div>
            ))}
        </section>
    )
}