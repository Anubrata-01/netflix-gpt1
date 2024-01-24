import React from 'react'

const DirectionSection = ({directors}) => {
    return directors?.map((item) => (
        <div key={item.id} className="flex pl-3 text-sm text-white">
          <p>{item.name}</p>
        </div>
     ));
}

export default DirectionSection;