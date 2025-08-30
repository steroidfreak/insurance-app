import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const BUBBLES = {
    owner: [{ label: "Health", type: "health" }, { label: "Travel", type: "travel" }],
    wife: [{ label: "Health", type: "health" }, { label: "Maternity", type: "maternity" }],
    house: [{ label: "Home", type: "home" }, { label: "Contents", type: "contents" }],
    children: [{ label: "Health", type: "health" }, { label: "Education", type: "education" }],
};

const bubbleVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 8 },
    show: (i) => ({ opacity: 1, scale: 1, y: 0, transition: { delay: 0.05 * i, type: "spring", stiffness: 280, damping: 20 } }),
    exit: { opacity: 0, scale: 0.9, y: 8, transition: { duration: 0.15 } },
};

export default function InsuranceScene() {
    const [selected, setSelected] = useState(null);
    const navigate = useNavigate();

    const houseSize = 340;
    const avatarSize = 76;

    const anchors = {
        owner: { bottom: 56, left: 44 },
        wife: { bottom: 56, right: 44 },
        children: { bottom: 0, centerX: true },
    };

    const BubbleRow = ({ entity, size = avatarSize }) => {
        const items = BUBBLES[entity] ?? [];
        const style = {
            position: "absolute",
            zIndex: 30,
            display: "flex",
            gap: 12,
            bottom: size + 10,
            left: "50%",
            transform: "translateX(-50%)",
        };
        return (
            <AnimatePresence>
                <div style={style} onMouseEnter={() => setSelected(entity)}>
                    {items.map((b, i) => (
                        <motion.button
                            key={b.type}
                            custom={i}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            variants={bubbleVariants}
                            className="bubble"
                            onClick={() => navigate(`/insurance/${entity}/${b.type}`)}
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {b.label}
                        </motion.button>
                    ))}
                </div>
            </AnimatePresence>
        );
    };

    return (
        <div
            className="relative w-full flex justify-center items-center"
            onMouseLeave={() => setSelected(null)}
        >
            <motion.div
                onMouseEnter={() => setSelected("house")}
                whileHover={{ scale: 1.02 }}
                className="relative cursor-pointer"
                style={{ width: houseSize, height: houseSize }}
            >
                <img src="/house.png" alt="House" className="w-full h-full object-contain" />

                {/* Owner */}
                <div
                    onMouseEnter={() => setSelected("owner")}
                    onMouseLeave={() => setSelected(null)}
                    className="absolute"
                    style={{ bottom: anchors.owner.bottom, left: anchors.owner.left, zIndex: 20 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white rounded-full shadow-card cursor-pointer"
                        style={{ width: avatarSize, height: avatarSize }}
                    >
                        <img src="/owner.png" alt="Owner" className="w-full h-full object-cover rounded-full" />
                    </motion.div>
                    {selected === "owner" && <BubbleRow entity="owner" />}
                </div>

                {/* Wife */}
                <div
                    onMouseEnter={() => setSelected("wife")}
                    onMouseLeave={() => setSelected(null)}
                    className="absolute"
                    style={{ bottom: anchors.wife.bottom, right: anchors.wife.right, zIndex: 20 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white rounded-full shadow-card cursor-pointer"
                        style={{ width: avatarSize, height: avatarSize }}
                    >
                        <img src="/wife.png" alt="Wife" className="w-full h-full object-cover rounded-full" />
                    </motion.div>
                    {selected === "wife" && <BubbleRow entity="wife" />}
                </div>

                {/* Children (container static; image scales only if you want) */}
                <div
                    onMouseEnter={() => setSelected("children")}
                    onMouseLeave={() => setSelected(null)}
                    className="absolute"
                    style={{ bottom: anchors.children.bottom, left: "50%", transform: "translateX(-50%)", zIndex: 20 }}
                >
                    <div
                        className="bg-white rounded-full shadow-card cursor-pointer"
                        style={{ width: avatarSize - 6, height: avatarSize - 6 }}
                    >
                        <img src="/children.png" alt="Children" className="w-full h-full object-cover rounded-full" />
                    </div>
                    {selected === "children" && <BubbleRow entity="children" size={avatarSize - 6} />}
                </div>
            </motion.div>

            {/* House bubbles (appear over the house) */}
            {selected === "house" && (
                <div
                    className="absolute -top-12"
                    onMouseEnter={() => setSelected("house")}
                >
                    <AnimatePresence>
                        {BUBBLES.house.map((b, i) => (
                            <motion.button
                                key={b.type}
                                custom={i}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                variants={bubbleVariants}
                                className="bubble mr-3"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`/insurance/house/${b.type}`);
                                }}
                                whileHover={{ scale: 1.06 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {b.label}
                            </motion.button>
                        ))}
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
}
