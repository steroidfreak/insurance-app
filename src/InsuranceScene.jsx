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

    const BubbleRow = ({ entity, anchor }) => {
        const items = BUBBLES[entity] ?? [];
        const style = {
            position: "absolute",
            zIndex: 30,
            display: "flex",
            gap: 12,
            bottom: (anchor.bottom ?? 0) + avatarSize + 10,
            ...(anchor.left != null ? { left: anchor.left } : {}),
            ...(anchor.right != null ? { right: anchor.right } : {}),
            ...(anchor.centerX ? { left: "50%", transform: "translateX(-50%)" } : {}),
        };
        return (
            <AnimatePresence>
                <div style={style} onClick={(e) => e.stopPropagation()}>
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
        <div className="relative w-full flex justify-center items-center">
            <motion.div
                onClick={(e) => {
                    e.stopPropagation();
                    setSelected(selected === "house" ? null : "house");
                }}
                whileHover={{ scale: 1.02 }}
                className="relative cursor-pointer"
                style={{ width: houseSize, height: houseSize }}
            >
                <img src="/house.png" alt="House" className="w-full h-full object-contain" />

                {/* Owner */}
                <motion.div
                    onClick={(e) => { e.stopPropagation(); setSelected(selected === "owner" ? null : "owner"); }}
                    whileHover={{ scale: 1.05 }}
                    className="absolute bg-white rounded-full shadow-card cursor-pointer"
                    style={{ bottom: anchors.owner.bottom, left: anchors.owner.left, width: avatarSize, height: avatarSize, zIndex: 20 }}
                >
                    <img src="/owner.png" alt="Owner" className="w-full h-full object-cover rounded-full" />
                </motion.div>
                {selected === "owner" && <BubbleRow entity="owner" anchor={anchors.owner} />}

                {/* Wife */}
                <motion.div
                    onClick={(e) => { e.stopPropagation(); setSelected(selected === "wife" ? null : "wife"); }}
                    whileHover={{ scale: 1.05 }}
                    className="absolute bg-white rounded-full shadow-card cursor-pointer"
                    style={{ bottom: anchors.wife.bottom, right: anchors.wife.right, width: avatarSize, height: avatarSize, zIndex: 20 }}
                >
                    <img src="/wife.png" alt="Wife" className="w-full h-full object-cover rounded-full" />
                </motion.div>
                {selected === "wife" && <BubbleRow entity="wife" anchor={anchors.wife} />}

                {/* Children (container static; image scales only if you want) */}
                <div
                    onClick={(e) => { e.stopPropagation(); setSelected(selected === "children" ? null : "children"); }}
                    className="absolute bg-white rounded-full shadow-card cursor-pointer"
                    style={{ bottom: anchors.children.bottom, left: "50%", transform: "translateX(-50%)", width: avatarSize - 6, height: avatarSize - 6, zIndex: 20 }}
                >
                    <img src="/children.png" alt="Children" className="w-full h-full object-cover rounded-full" />
                </div>
                {selected === "children" && <BubbleRow entity="children" anchor={anchors.children} />}
            </motion.div>

            {/* House bubbles (appear over the house) */}
            {selected === "house" && (
                <div className="absolute -top-12">
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
