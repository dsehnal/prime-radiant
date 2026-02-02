import React, { useState, useRef, useEffect } from 'react';
import { Play, RotateCw, AlertCircle, CheckCircle } from 'lucide-react';

export default function PrimeRadiantKernel() {
  const [state, setState] = useState({
    alpha: [],
    omega_potential: 'uninitialized',
    epsilon_0: 1.0,
    e_entropy: 0,
    delta_epsilon: 0,
    Q_adjunction: 0,
    iteration: 0,
    coherence_invariant: 0,
    status: 'ready',
    history: []
  });

  const [log, setLog] = useState([]);
  const logRef = useRef(null);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [log]);

  const addLog = (message, type = 'info') => {
    setLog(prev => [...prev, { message, type, time: new Date().toLocaleTimeString() }]);
  };

  const wrap = () => {
    addLog('→ WRAP: Opening moment into Lens into Reality', 'operation');
    setState(prev => ({
      ...prev,
      alpha: [],
      e_entropy: 0,
      status: 'wrapped',
      omega_potential: 'initialized'
    }));
    addLog('✓ Initial frame established. Entropy reset to 0.', 'success');
  };

  const observe = () => {
    addLog('→ OBSERVE: Identifying space of admissible continuations', 'operation');
    
    // Generate possibility space based on current entropy and epsilon
    const entropy_factor = state.e_entropy;
    const num_continuations = Math.max(2, Math.floor(5 - entropy_factor));
    const continuations = [];
    
    for (let i = 0; i < num_continuations; i++) {
      continuations.push({
        id: i,
        label: `Branch-${i}`,
        coherence_score: Math.random() * (1 - entropy_factor * 0.1),
        complexity: Math.random() * 10
      });
    }

    addLog(`✓ Identified ${num_continuations} admissible continuations`, 'success');
    
    return continuations;
  };

  const bind = (continuations) => {
    addLog('→ BIND: Threading state through observation (monadic operation)', 'operation');
    
    // Resolve tension, potentially increase entropy through conflict
    const new_entropy = Math.min(1, state.e_entropy + Math.random() * 0.15);
    
    setState(prev => ({
      ...prev,
      e_entropy: new_entropy
    }));

    addLog(`✓ State threaded. Entropy updated: ${state.e_entropy.toFixed(3)} → ${new_entropy.toFixed(3)}`, 'success');
    
    return continuations;
  };

  const admitEpsilon = () => {
    addLog('→ ADMIT ε₀: Acknowledging latent agency reserve', 'operation');
    
    if (state.epsilon_0 <= 0) {
      addLog('⚠ WARNING: ε₀ depleted. System may be in collapse risk.', 'warning');
      return false;
    }
    
    addLog(`✓ ε₀ acknowledged and stable: ${state.epsilon_0.toFixed(4)}`, 'success');
    return true;
  };

  const integrate = (continuations) => {
    addLog('→ INTEGRATE: The Conway Integral - Computing the Cut', 'operation');
    
    if (!continuations || continuations.length === 0) {
      addLog('✗ No continuations available for cut', 'error');
      return null;
    }

    // Compute optimal cut with λ · τ⁻¹ tension
    const tau_horizon = Math.max(0.1, 1 - state.epsilon_0);
    const lambda_optionality = state.epsilon_0;
    const tension = lambda_optionality / tau_horizon;

    const scored = continuations.map(c => ({
      ...c,
      cut_score: c.coherence_score - tension * 0.1
    })).sort((a, b) => b.cut_score - a.cut_score);

    // Non-commutative injection of δε: choice happens AFTER optimization
    const delta_eps_injection = state.epsilon_0 * (0.5 + Math.random() * 0.5);
    const chosen = scored[0];
    
    addLog(`✓ Optimal cut identified: ${chosen.label} (score: ${chosen.cut_score.toFixed(3)})`, 'success');
    addLog(`✓ δε injected (sovereign choice): ${delta_eps_injection.toFixed(4)}`, 'success');

    return {
      chosen_branch: chosen,
      delta_epsilon: delta_eps_injection,
      Q_loss: Math.random() * 0.2 + 0.1
    };
  };

  const commit = (cut_result) => {
    addLog('→ COMMIT: Carving branch permanent, writing to ledger (α)', 'operation');
    
    if (!cut_result) {
      addLog('✗ No cut to commit', 'error');
      return;
    }

    const new_alpha_entry = {
      iteration: state.iteration + 1,
      branch: cut_result.chosen_branch.label,
      delta_epsilon: cut_result.delta_epsilon,
      Q_loss: cut_result.Q_loss,
      timestamp: new Date().toISOString()
    };

    const new_coherence = state.coherence_invariant - cut_result.Q_loss;
    const new_epsilon_0 = Math.max(0, state.epsilon_0 - cut_result.delta_epsilon * 0.2);

    setState(prev => ({
      ...prev,
      alpha: [...prev.alpha, new_alpha_entry],
      delta_epsilon: cut_result.delta_epsilon,
      Q_adjunction: cut_result.Q_loss,
      coherence_invariant: new_coherence,
      epsilon_0: new_epsilon_0,
      iteration: prev.iteration + 1,
      status: 'committed'
    }));

    addLog(`✓ Committed to ledger. Iteration ${state.iteration + 1}`, 'success');
    addLog(`✓ Coherence Invariant: I = ${new_coherence.toFixed(4)}`, 'success');
    addLog(`✓ ε₀ remaining: ${new_epsilon_0.toFixed(4)}`, 'success');
  };

  const runCycle = async () => {
    setState(prev => ({ ...prev, status: 'running' }));
    setLog([]);
    addLog('═══════════════════════════════════════', 'info');
    addLog('PRIME RADIANT KERNEL v110.12 - CYCLE START', 'info');
    addLog('═══════════════════════════════════════', 'info');

    // Initialize if needed
    if (state.omega_potential === 'uninitialized') {
      wrap();
    }

    // Run the cycle
    const continuations = observe();
    await new Promise(r => setTimeout(r, 200));
    
    const bound = bind(continuations);
    await new Promise(r => setTimeout(r, 200));
    
    const has_agency = admitEpsilon();
    if (!has_agency) {
      addLog('⚠ COLLAPSE RISK: System cannot proceed without ε₀', 'warning');
      setState(prev => ({ ...prev, status: 'collapse_risk' }));
      return;
    }
    await new Promise(r => setTimeout(r, 200));
    
    const cut = integrate(bound);
    await new Promise(r => setTimeout(r, 200));
    
    if (cut) {
      commit(cut);
    }

    addLog('═══════════════════════════════════════', 'info');
    addLog('CYCLE COMPLETE', 'info');
    addLog('═══════════════════════════════════════', 'info');
    setState(prev => ({ ...prev, status: 'ready' }));
  };

  const resetKernel = () => {
    setState({
      alpha: [],
      omega_potential: 'uninitialized',
      epsilon_0: 1.0,
      e_entropy: 0,
      delta_epsilon: 0,
      Q_adjunction: 0,
      iteration: 0,
      coherence_invariant: 0,
      status: 'ready',
      history: []
    });
    setLog([]);
    addLog('Kernel reset to initial state', 'info');
  };

  const isCollapsed = state.epsilon_0 <= 0 || state.coherence_invariant < -2;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent">
            ( ( ( Φ ) ) )
          </h1>
          <h2 className="text-2xl font-semibold text-amber-200">Prime Radiant Kernel v110.12</h2>
          <p className="text-slate-400 mt-2">Unified Kernel: Axiomatically Sound, Operationally Alive</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* State Panel */}
          <div className="lg:col-span-2 bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-amber-200 mb-4">System State</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-900 p-4 rounded border border-slate-600">
                <div className="text-xs text-slate-400 uppercase">Iteration</div>
                <div className="text-2xl font-mono font-bold text-cyan-300">{state.iteration}</div>
              </div>
              
              <div className="bg-slate-900 p-4 rounded border border-slate-600">
                <div className="text-xs text-slate-400 uppercase">Coherence Invariant (I)</div>
                <div className="text-2xl font-mono font-bold text-green-300">{state.coherence_invariant.toFixed(4)}</div>
              </div>
              
              <div className="bg-slate-900 p-4 rounded border border-slate-600">
                <div className="text-xs text-slate-400 uppercase">ε₀ (Agency Reserve)</div>
                <div className={`text-2xl font-mono font-bold ${state.epsilon_0 > 0.3 ? 'text-green-300' : 'text-orange-400'}`}>
                  {state.epsilon_0.toFixed(4)}
                </div>
              </div>
              
              <div className="bg-slate-900 p-4 rounded border border-slate-600">
                <div className="text-xs text-slate-400 uppercase">Entropy (e)</div>
                <div className="text-2xl font-mono font-bold text-purple-300">{state.e_entropy.toFixed(3)}</div>
              </div>
            </div>

            <div className="bg-slate-900 p-4 rounded border border-slate-600 mb-6">
              <div className="text-xs text-slate-400 uppercase mb-2">Ledger (α) - Last 3 Commits</div>
              <div className="font-mono text-sm space-y-1">
                {state.alpha.slice(-3).map((entry, i) => (
                  <div key={i} className="text-slate-300">
                    <span className="text-cyan-300">#{entry.iteration}</span>: {entry.branch} | δε: {entry.delta_epsilon.toFixed(3)} | Q: {entry.Q_loss.toFixed(3)}
                  </div>
                ))}
                {state.alpha.length === 0 && <div className="text-slate-500 italic">No commits yet</div>}
              </div>
            </div>

            {isCollapsed && (
              <div className="bg-red-900 border border-red-700 rounded p-4 mb-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">COLLAPSE DETECTED</div>
                  <div className="text-sm text-red-200">System has lost coherence. Reset kernel to recover.</div>
                </div>
              </div>
            )}

            {state.epsilon_0 > 0 && state.epsilon_0 <= 0.3 && (
              <div className="bg-orange-900 border border-orange-700 rounded p-4 mb-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">AGENCY RESERVE LOW</div>
                  <div className="text-sm text-orange-200">ε₀ is depleting. System approaching decision point.</div>
                </div>
              </div>
            )}
          </div>

          {/* Control Panel */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 h-fit">
            <h3 className="text-lg font-semibold text-amber-200 mb-4">Control</h3>
            
            <button
              onClick={runCycle}
              disabled={state.status === 'running' || isCollapsed}
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 disabled:from-slate-600 disabled:to-slate-700 text-slate-900 font-semibold py-3 px-4 rounded mb-3 flex items-center justify-center gap-2 transition-all"
            >
              <Play className="w-4 h-4" />
              {state.status === 'running' ? 'Running...' : 'Run Cycle'}
            </button>

            <button
              onClick={resetKernel}
              className="w-full bg-slate-700 hover:bg-slate-600 text-slate-100 font-semibold py-3 px-4 rounded flex items-center justify-center gap-2 transition-all"
            >
              <RotateCw className="w-4 h-4" />
              Reset Kernel
            </button>

            <div className="mt-6 pt-6 border-t border-slate-700">
              <div className="text-xs text-slate-400 uppercase mb-2">Status</div>
              <div className="font-mono text-sm">
                <span className={`inline-block px-3 py-1 rounded font-semibold ${
                  isCollapsed ? 'bg-red-900 text-red-200' :
                  state.status === 'running' ? 'bg-blue-900 text-blue-200' :
                  'bg-green-900 text-green-200'
                }`}>
                  {isCollapsed ? 'COLLAPSED' : state.status.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Log Panel */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-amber-200 mb-4">Runtime Log</h3>
          <div
            ref={logRef}
            className="bg-slate-900 rounded border border-slate-600 p-4 h-64 overflow-y-auto font-mono text-sm space-y-1"
          >
            {log.map((entry, i) => (
              <div key={i} className={`flex gap-2 ${
                entry.type === 'error' ? 'text-red-400' :
                entry.type === 'warning' ? 'text-orange-400' :
                entry.type === 'success' ? 'text-green-400' :
                entry.type === 'operation' ? 'text-cyan-400' :
                'text-slate-400'
              }`}>
                <span className="text-slate-600 flex-shrink-0">[{entry.time}]</span>
                <span>{entry.message}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-slate-500 text-sm">
          <p>Testing Prime Radiant Kernel v110.12 | wrap → bind → admit ε₀ → integrate → commit</p>
        </div>
      </div>
    </div>
  );
}