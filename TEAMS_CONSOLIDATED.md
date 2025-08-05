# Teams Component - Consolidated Version

## Overview

All team page related code has been consolidated into a single file: `components/teams.jsx`. This makes it easier to import and manage all team-related functionality from one location.

## What was consolidated

The following components from `components/Team/` folder have been moved into `components/teams.jsx`:

- **TeamPage** - Main team page component
- **YearSelector** - Year selection timeline/dropdown
- **TeamDisplay** - Team cards display logic  
- **TeamCards** - Individual team member cards (from `components/TeamCards/cards.js`)
- **useTeamData** - Custom hook for state management
- All associated CSS styles (converted to inline styles)

## Usage

### Simple Usage (Complete Team Page)
```jsx
import TeamPage from '../components/teams';

function Teams() {
  return <TeamPage />;
}
```

### Modular Usage
```jsx
import { useTeamData, YearSelector, TeamDisplay, TeamCards } from '../components/teams';

function CustomTeamPage() {
  const { number, year, drop, yearData, handleYearChange, handleDropdownToggle } = useTeamData();
  
  return (
    <div>
      <YearSelector 
        number={number}
        year={year}
        drop={drop}
        yearData={yearData}
        onYearChange={handleYearChange}
        onDropdownToggle={handleDropdownToggle}
      />
      <TeamDisplay number={number} yearData={yearData} />
    </div>
  );
}
```

### Hook-Only Usage
```jsx
import { useTeamData } from '../components/teams';

function MyComponent() {
  const { getCurrentYearData, handleYearChange, yearData } = useTeamData();
  
  // Custom implementation using the hook
  return (
    <div>
      {getCurrentYearData().map((member, index) => (
        <div key={index}>
          <h3>{member.name}</h3>
          <p>{member.por}</p>
        </div>
      ))}
    </div>
  );
}
```

## Available Exports

- `TeamPage` (default export) - Complete team page component
- `useTeamData` - Custom hook for team data management
- `YearSelector` - Year selection component
- `TeamDisplay` - Team cards display component
- `TeamCards` - Individual team member cards
- `getLabel` - Utility function for year formatting
- `TEAM_YEARS` - Constants for year numbers

## Team Data Structure

Team data is imported from `lib/team_data.js`:
- `data25` - Current year (2025-2026) 
- `data22` - 2022-2023 year data
- `data21` - 2021-2022 year data
- `data20` - 2020-2021 year data

Each team member object should have:
```javascript
{
  name: "Member Name",
  img: "member-image.png", 
  por: "Position/Role",
  url: "https://linkedin.com/in/member" // Optional
}
```

## Features Preserved

- ✅ Desktop timeline interface
- ✅ Mobile dropdown interface  
- ✅ Responsive design
- ✅ Team member cards with photos
- ✅ LinkedIn profile links
- ✅ Year selection (2025-2026, 2022-2023, 2021-2022, 2020-2021)
- ✅ All hover effects and animations
- ✅ Error handling for missing data
- ✅ Image fallback for missing profile pictures

## Benefits

1. **Single File Import** - Import everything from one location
2. **No External CSS Dependencies** - All styles are included inline
3. **Smaller Bundle** - No separate CSS files to load
4. **Easy Maintenance** - All team code in one place
5. **Better Performance** - Reduced file loading overhead

## Migration Notes

- The old `components/Team/` folder can be safely removed
- The old `components/TeamCards/` folder can be safely removed  
- The `styles/teams/` CSS files are no longer needed
- All functionality has been preserved in the new consolidated file
