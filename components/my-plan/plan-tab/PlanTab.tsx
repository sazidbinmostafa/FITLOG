import EmptyPlan from './EmptyPlan'

function PlanTab() {
    return (
        <div className="tabs tabs-box bg-dark-bg border-0 shadow-none my-4">
            {/* Tab 1 */}
            <input type="radio" name="my_tabs_6" className="tab hover:bg-base-100 text-[#9CA3AF] hover:text-white rounded" aria-label="Today’s Plan" defaultChecked />
            <div className="tab-content bg-dark-bg">
                <EmptyPlan/>
            </div>

            {/* Tab 2 */}
            <input type="radio" name="my_tabs_6" className="tab hover:bg-base-100 text-[#9CA3AF] hover:text-white rounded" aria-label="Saved" />
            <div className="tab-content bg-dark-bg">
                <EmptyPlan/>
            </div>
        </div>
    )
}

export default PlanTab