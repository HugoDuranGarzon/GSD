const express = require('express');
const router = express.Router();
const db = require('../db/database.js');

// GET
router.get('/:id', (req, res) => {
    const taskid = parseInt(req.params.id);
    db.get('SELECT * FROM tasks WHERE id = ?', [taskid], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.status(404).json({ error: "Task not found" });
        res.json(row);
    });
});

// POST
router.post('/:id', (req, res) => {
    const taskid = parseInt(req.params.id);
    const { title, comments, completed } = req.body;

    db.run('INSERT INTO tasks (id, title, comments, completed) VALUES (?, ?, ?, ?)', 
        [taskid, title, comments, completed], 
        (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json("Task saved successfully");
        });
});

// PUT
router.put('/:id', (req, res) => {
    const taskid = parseInt(req.params.id);
    const { title, comments, completed } = req.body;

    db.run('UPDATE tasks SET title = ?, comments = ?, completed = ? WHERE id = ?', 
        [title, comments, completed, taskid], 
        (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json("Task updated successfully");
        });
});

// DELETE
router.delete('/:id', (req, res) => {
    const taskid = parseInt(req.params.id);

    db.run('DELETE FROM tasks WHERE id = ?', [taskid], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json("Task deleted successfully");
    });
});

module.exports = router;
