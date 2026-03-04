const headerTabs = [
    {label: 'Browse', id: 'browse'},
    {label: 'New', id: 'new'},
    {label: 'Top Rated', id: 'top'},
    {label: 'Recommended', id: 'rec'},
]

const icons = [
    {label: 'Store', icon: '👜'},
    {label: 'User', icon: '👤'},
    {label: 'Theme', icon: '🌑'},
]

function eventManager(label){
    if(label === 'Theme'){
        document.body.classList.toggle('dark');
    }
}
export default function HomeHeader({setSearchQuery, setInput, input}){
    return(
        <header>
            <h1>ABANTUVERSE</h1>
            <nav className="header-buttons">{headerTabs.map(btn => 
                (<button id={btn.id}>
                    {btn.label}
                </button>))}</nav>
                <div className="search">
                    <input type="search" placeholder="search items here.."
                    onChange={(e)=>{setInput(e.target.value)
                        if(e.key === 'Enter'){
                            setSearchQuery(input)
                         setTimeout(()=>{
                            setInput('')
                        }, 2000)
                        }
                    }}
                    value={input}
                    />
                    <button onClick={()=>{setSearchQuery(input)
                         setTimeout(()=>{
                            setInput('')
                        }, 2000)
                    }
                
                }>search</button>
                </div>
                <div className="right">
                    {icons.map(icon => (
                        <div 
                        className="icon-card" 
                        onClick={() => eventManager(icon.label)}
                        key={icon.label}
                    >
                        <span className="icon">{icon.icon}</span>
                        <span className="icon-name">{icon.label}</span>
    </div>
))}
                </div>
                
        </header>
    )
}